webpackJsonp([42],{1963:function(t,e,n){var a=n(0),l=n(89),i=n(426).PageRenderer;i.__esModule&&(i=i.default);var o=l({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:n(2066)}},componentWillMount:function(){},render:function(){return a.createElement(i,Object.assign({},this.props,{content:this.state.content}))}});o.__catalog_loader__=!0,t.exports=o},2066:function(t,e){t.exports="```react\nshowSource: true\nstate: {\n\tfiles: null,\n\tlocalizedResources: {\n\t\trecommendedMinSize: 'recommended minimum image size: 800 x 400',\n\t\tuploadFile: 'Upload File',\n\t\tuploadFiles: 'Upload Files',\n\t\taddText: 'Insert',\n\t\tcancelText: 'Cancel',\n\t\tdragDropText: 'Drag and drop to upload image',\n\t\tbrowseText: 'or browse files',\n\t},\n}\n---\n<FilePickerDemo>\n\t<FilePicker\n\t\tonFilesSelected={files => {\n\t\t\tif (files.kind === 'files') {\n\t\t\t\talert(files.files);\n\t\t\t} else if (files.kind === 'assets') {\n\t\t\t\talert(JSON.stringify(files.assets));\n\t\t\t} else if (files.kind === 'filter') {\n\t\t\t\talert(JSON.stringify(files.filterData));\n\t\t\t} else {\n\t\t\t\tconsole.error(files);\n\t\t\t\talert('Invalid response');\n\t\t\t}\n\t\t}}\n\t\tonCancel={() => alert('You called the onCancelFunction. This should be used to hide the component')}\n\t\tonImageLoadError={imageSource => alert(`${imageSource} failed to load`)}\n\t\tallowMultiSelect\n\t>\n\t\t<TabManager>\n\t\t\t<TabList>\n\t\t\t\t<Tab>\n\t\t\t\t\t{state.localizedResources.uploadFiles}\n\t\t\t\t</Tab>\n\t\t\t\t<Tab>{'Stock photos'}</Tab>\n\t\t\t\t<Tab>{'Filter'}</Tab>\n\t\t\t</TabList>\n\t\t\t<TabPanels>\n\t\t\t\t<TabPanel>\n\t\t\t\t\t<FileUpload />\n\t\t\t\t</TabPanel>\n\t\t\t\t<TabPanel>\n\t\t\t\t\t<AmberContent\n\t\t\t\t\t\taccountId={6817140}\n\t\t\t\t\t\tfilter={'kind:\"image\"'}\n\t\t\t\t\t\tfooterText={'This panel selects assets'}\n\t\t\t\t\t\tsort={'relevance'}\n\t\t\t\t\t\tviewStyle={'tinygrid'}\n\t\t\t\t\t/>\n\t\t\t\t</TabPanel>\n\t\t\t\t<TabPanel>\n\t\t\t\t\t<AmberContent\n\t\t\t\t\t\taccountId={6817140}\n\t\t\t\t\t\tfilter={'kind:\"image\"'}\n\t\t\t\t\t\tfooterText={'This panel returns a filter'}\n\t\t\t\t\t\tpickerMode={'filter'}\n\t\t\t\t\t\tsort={'relevance'}\n\t\t\t\t\t\tviewStyle={'tinygrid'}\n\t\t\t\t\t/>\n\t\t\t\t</TabPanel>\n\t\t\t</TabPanels>\n\t\t</TabManager>\n\t</FilePicker>\n</FilePickerDemo>\n```\n\n# Localized Resources defaults\n\n```code\nlang: javascript\n---\n\tlocalizedResources: {\n\t\trecommendedMinSize: 'recommended minimum image size: 800 x 400',\n\t\tuploadFile: 'Upload File',\n\t\tuploadFiles: 'Upload Files',\n\t\taddText: 'Insert',\n\t\tcancelText: 'Cancel',\n\t\tdragDropText: 'Drag and drop to upload image',\n\t\tbrowseText: 'or browse files',\n\t}\n```\n"}});
//# sourceMappingURL=42.dfd97556.chunk.js.map