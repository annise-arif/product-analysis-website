import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='blogs-container'>
            <div className="blog">
              <h3>What is ContextApi</h3>
              <p>The Context Api is a React structure that enables you to <br />
               exchange unique details and assists in solving prop-drilling <br />
                from all levels of your application, Context provides a way <br />
                to data props throw the component tree without having to pass <br />
                 props down manually at every level. in a typical React</p>
            </div>

            <div className="blog">
              <h3>What is Semantic Tags</h3>
              <p> Semantic HTML is the use of HTML markup to reinforce the <br />
              Semantics, of the information is web pages and web applications <br />
              rather than merely to define its presentation or look. <br />
              Semantic HTML is processed by traditional web browsers <br />
               as well by many other user agents.</p>
            </div>

        </div>
    );
};

export default Blogs;