import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='blogs-container'>
            <h2>Some Question And Answer</h2>
            <div className='blog'>
                <h3>Q1 : What is Context API ?</h3>
                <p>Ans : Context API is a way for passing data from one component to another component. Before understanding Context API, We will know about props drilling.It's also a data passing way.Normally, We pass data parent to child component vai props.But we want to send data from parent to after 2/3/more level child component,Not imediate child component.So that It's created a problem.Bacause props send data only imediate child.In this situation we send data vai props in every level untill we got our nedded component. Context API is the perfect solution for this problem.If we creat a Context API in our parent component And wrap all child (imediate/non-imediate) by it.So that We can use data from any child components using useContext() hook.At this result,We send data parent to any child component without passing props at every level.</p>
            </div>
            <div className='blog'>
                <h3>Q2 : What is Semantic Tag ?</h3>
                <p>Ans : Semantic tag or Semantic element is a feature of Html5.It's actually describe the meaning of codes.<br />In Html4 we used non-semantic element like this :
                    <xmp>
                        &lt;div class='header'&gt; &lt;/div&gt;
                    </xmp>
                    But In Html5 We use Semantic code like this :
                    <xmp>
                        &lt;header&gt; &lt;/header&gt;
                    </xmp>
                    Both code are describe about header.But Semantic element is more cleaner and readable than Non-Semantic element.It also easy to unserstand for Search Engine and screen reader and other technology.We crearly explore the benifit of semantic element when we creat a big project.Some Semantic tags given below :
                    <xmp>
                        &lt;header&gt; &lt;/header&gt;
                    </xmp>
                    <xmp>
                        &lt;footer&gt; &lt;/footer&gt;
                    </xmp>
                    <xmp>
                        &lt;main&gt; &lt;/main&gt;
                    </xmp>
                    <xmp>
                        &lt;article&gt; &lt;/article&gt;
                    </xmp>
                    <xmp>
                        &lt;aside&gt; &lt;/aside&gt;
                    </xmp>
                    <xmp>
                        &lt;nav&gt; &lt;/nav&gt;
                    </xmp>
                    Actually, Semantic elements increased the readability of codes for human and machine.
                </p>
            </div>
            <div className='blog'>
                <h3>Q3 : What are the difference between inline element and block element and inline-block element ?</h3>
                <p>Ans : Inline element : Inline elements are take only content width.Many inline elements can be sitting in a line. Custom width,height,padding,margin don't work properly in inline element. Some inline elements :
                    <xmp>
                        &lt;a&gt; &lt;/a&gt;
                    </xmp>
                    <xmp>
                        &lt;span&gt; &lt;/span&gt;
                    </xmp>
                    <xmp>
                        &lt;img&gt; &lt;/img&gt;
                    </xmp>
                    Block element : Block elements are take full line width.So every block level element need every line. Custom width,height,padding,margin and every-property work properly in block level element. Some block level elements :
                    <xmp>
                        &lt;div&gt; &lt;/div&gt;
                    </xmp>
                    <xmp>
                        &lt;h1&gt; &lt;/h1&gt;
                    </xmp>
                    <xmp>
                        &lt;p&gt; &lt;/p&gt;
                    </xmp>
                    Inline-Block element : Inline-Block elements are actually to see inline element but it's bahaviour like block level element.So every inline-block level element take just content width.But Custom width,height,padding,margin and every-property work properly.
                </p>
            </div>
        </div>
    );
};

export default Blogs;