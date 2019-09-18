webpackJsonp([24],{1961:function(t,e,n){var a=n(0),o=n(89),c=n(426).PageRenderer;c.__esModule&&(c=c.default);var i=o({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:n(2064)}},componentWillMount:function(){},render:function(){return a.createElement(c,Object.assign({},this.props,{content:this.state.content}))}});i.__catalog_loader__=!0,t.exports=i},2064:function(t,e){t.exports='## Parameter Sentence with CommandSentence\n\nParameter sentences are made to work with [@faithlife/command-sentence-control](https://git/Logos/command-sentence-control) (git enterprise link)\n\nBelow is an example usage\n\n```code\nlang: jsx\n---\n<ParameterSentenceDemo>\n\t<ParameterSentence accessibilityFormLabel="Tithe Calculator">\n\t\t<CommandSentence\n\t\t\ttemplate={\'I want to give %PERCENTAGE% (%PREPOST% 19% taxes) of my %SCHEDULE% income of %INCOME%.\'}\n\t\t>\n\t\t\t<CommandSentence.Field name="PERCENTAGE">\n\t\t\t\t<ParameterInputBox\n\t\t\t\t\tdefaultValue="10"\n\t\t\t\t\tvalue={state.percentage}\n\t\t\t\t\tonChange={event => setState({ percentage: event.target.value })}\n\t\t\t\t\tformatValue={val => `${val}%`}\n\t\t\t\t\twidth="35px"\n\t\t\t\t\taccessibilityLabel={\'Percent of income to tithe\'}\n\t\t\t\t/>\n\t\t\t</CommandSentence.Field>\n\t\t\t<CommandSentence.Field name="PREPOST">\n\t\t\t\t<ParameterSelect\n\t\t\t\t\tselectedId={state.prepost}\n\t\t\t\t\tonItemSelect={item => setState({ prepost: item })}\n\t\t\t\t\toptions={prePostOptions}\n\t\t\t\t\taccessibilityLabel={\'Should give tithe before or after taxes\'}\n\t\t\t\t/>\n\t\t\t</CommandSentence.Field>\n\t\t\t<CommandSentence.Field name="SCHEDULE">\n\t\t\t\t<ParameterSelect\n\t\t\t\t\tselectedId={state.schedule}\n\t\t\t\t\tonItemSelect={item => setState({ schedule: item })}\n\t\t\t\t\toptions={scheduleOptions}\n\t\t\t\t\taccessibilityLabel={\'Pay schedule of income\'}\n\t\t\t\t/>\n\t\t\t</CommandSentence.Field>\n\t\t\t<CommandSentence.Field name="INCOME">\n\t\t\t\t<ParameterInputBox\n\t\t\t\t\tdefaultValue="55700"\n\t\t\t\t\tvalue={state.income}\n\t\t\t\t\tonChange={event => setState({ income: event.target.value })}\n\t\t\t\t\tformatValue={val => `$${val}`}\n\t\t\t\t\twidth="50px"\n\t\t\t\t\taccessibilityLabel={\'Income per pay schedule period\'}\n\t\t\t\t/>\n\t\t\t</CommandSentence.Field>\n\t\t</CommandSentence>\n\t</ParameterSentence>\n</ParameterSentenceDemo>\n```\n'}});
//# sourceMappingURL=24.3d8f3e28.chunk.js.map