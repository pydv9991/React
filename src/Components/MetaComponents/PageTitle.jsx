import React from 'react';
import MetaTags from 'react-meta-tags';

class PageTitle extends React.Component {
    render()
    {
    return (
     <div className="PageTitle">
          <MetaTags>
            <meta charSet="utf-8"/>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width"/>
            <meta name="description" content=""/>
            <meta name="author" content=""/>
            <link rel="icon" href="../../favicon.ico"/>
            <title>Credit Karma</title>  
    
        </MetaTags>
          
        </div>
        
    );
 
}

}
export default PageTitle;
