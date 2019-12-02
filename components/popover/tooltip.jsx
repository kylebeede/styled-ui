import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useDebouncedCallback } from '../shared-hooks'; // Copied from react-ui. Import from there when made available.
import { Popover } from './component';
import { PopoverManager } from './popover-manager';
import { PopoverReference } from './popper-helpers';

/** Simple tooltip that uses popovers internally. Does not support custom positioning. */
export function Tooltip(props) {
	const { children, text, content, isOpen, onConfirm, ...otherProps } = props;
	const [tooltipIsOpen, setToolTipIsOpen] = useState(false);
	const [isOnMobile, setIsOnMobile] = useState(false);
	const referenceRef = useRef();

	const handleMouseEnter = () => {
		handleMouseLeave.cancel();
		setToolTipIsOpen(true);
	};

	const handleMouseLeave = useDebouncedCallback(() => {
		setToolTipIsOpen(false);
	}, 200);

	const handleConfirm = () => {
		setToolTipIsOpen(false);
		onConfirm && onConfirm();
	};

	const handleTap = e => {
		console.log(referenceRef);
		console.log(e);
		e.stopPropagation();
		if (!tooltipIsOpen) {
			setToolTipIsOpen(true);
		} else {
			handleConfirm();
		}
	};

	const handleOutsideTap = e => {
		e.currentTarget.focus();
		setToolTipIsOpen(false);
	};

	useEffect(() => {
		setIsOnMobile(window.matchMedia('(hover: none)').matches);
		return () => {
			handleMouseLeave.cancel();
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		if (window.matchMedia('(hover: none)').matches) {
			window.addEventListener('click', handleOutsideTap);

			return () => {
				window.removeEventListener('click', handleOutsideTap);
			};
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<PopoverManager>
			<PopoverReference
				ref={referenceRef}
				onMouseEnter={isOnMobile ? () => false : handleMouseEnter}
				onMouseLeave={isOnMobile ? () => false : handleMouseLeave}
				onClick={isOnMobile ? handleTap : handleConfirm}
			>
				{children}
			</PopoverReference>
			<Popover {...otherProps} eventsEnabled={false} isOpen={tooltipIsOpen || isOpen}>
				{content || text}
			</Popover>
		</PopoverManager>
	);
}

Tooltip.propTypes = {
	...Popover.propTypes,

	/** Content for the tooltip */
	content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
	/** Text for the tooltip (deprecated) */
	text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};
