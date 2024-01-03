// html中，空格并有时候会渲染成空格，有时候不会，这取决于所处的情况。

//但是在react中，会忽略所有的空格，所以在jsx中，如果想要渲染出空格，需要使用特殊的语法。
//{' '}

// react的className，如果传false/null/undefined，会被忽略，不会渲染成class，这样比传''要好，因为后者会渲染成class=""。
