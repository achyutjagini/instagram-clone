import { useContext, useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FirebaseContext from "../context/firebase"
import {Link} from 'react-router-dom'

export default function Login()
{
const history=useNavigate()
const {firebase}=useContext(FirebaseContext)

const [emailAddress,setEmailAddress]=useState('');
const [password,setPassword]=useState('');

const [error,setError]=useState('')
const isInvalid = password ===''||emailAddress===''

const handleLogin=()=>{};

useEffect(()=>{
document.title='Login-instagram'
},[]);

/*
container: This is likely a custom class defined in the project's CSS or using a CSS framework 
like Tailwind. It is often used to define a container element with a fixed width and centered horizontally on the page.

flex: This applies the display: flex property to the element, making it a flex container.

mx-auto: This applies horizontal auto-margins to the element, centering it horizontally
within its parent container.

max-w-screen-md: This sets the maximum width of the element to the specified value, in this case,
md (medium) screen size. This is often used in responsive designs to limit the width of the
element on smaller screens.

items-center: This applies the align-items: center property to the flex container,
vertically centering its child elements.

h-screen: This sets the height of the element to the full height of the viewport (screen height).
*/


/*
flex: This applies the display: flex property to the element, making it a flex container.
flex-col: This sets the flex-direction property of the flex container to column, meaning that its child elements will be arranged in a column layout.
w-2/5: This sets the width of the element to 40% of its parent container using the responsive sizing class w-2/5.
The inner div element is also given several classes:

flex: This applies the display: flex property to the element, making it a flex container.
flex-col: This sets the flex-direction property of the flex container to column, meaning that 
its child elements will be arranged in a column layout.

items-center: This applies the align-items: center property to the flex container, vertically 
centering its child elements.

bg-white: This sets the background color of the element to white.
p-4: This applies padding of 4 units to all sides of the element.
border: This applies a border to the element.
border-gray-primary: This sets the color of the border to a shade of gray defined in the project's CSS.
mb-4: This applies margin of 4 units to the bottom of the element.
rounded: This applies border-radius to the element, rounding its corners.
The h1 element is given three classes:

flex: This applies the display: flex property to the element, making it a flex container.

justify-center: This applies the justify-content: center property to the flex container, horizontally 
centering its child elements.

w-full: This sets the width of the element to 100% of its parent container.
*/


/*
text-sm: This sets the font size of the text to be small.
text-gray-base: This sets the color of the text to a base shade of gray.
w-full: This sets the width of the element to be 100% of its parent container.
mr-3: This adds a margin of 3 units to the right of the element.
py-5: This adds a vertical padding of 5 units to the top and bottom of the element.
px-4: This adds a horizontal padding of 4 units to the left and right of the element.
h-2: This sets the height of the element to 2 units.
border: This adds a border to the element.
border-gray-primary: This sets the color of the border to a primary shade of gray.
rounded: This adds rounded corners to the element.
mb-2: This adds a margin of 2 units to the bottom of the element.*/

return(
<div className="container flex mx-auto max-w-screen-md items-center h-screen">
      
      <div className="flex w-3/5">
        <img src="/images/iphone-with-profile.jpg" alt="iPhone with Instagram app" />
      </div>

      <div className="flex flex-col w-2/5">

        <div className="flex flex-col items-center bg-white p-4 border border-gray mb-5 rounded">

          <h1 className="flex justify-center w-full">
            <img src="/images/logo.png" alt="Instagram" className="mt-2 w-6/12 mb-4" />
          </h1>
          {error && <p className="mb-4 text-xs text-red-primary">{error}</p>}
          
          <form onSubmit={handleLogin} method="POST">
            <input aria-label="Enter your email address"
              type="text"
              placeholder="Email address"
              className="text-sm text-gray-base w-full mr-3 py-10 px-4 h-2 border border-gray-primary rounded mb-2"
              onChange={({ target }) => setEmailAddress(target.value)}
              value={emailAddress}
            />
              <input aria-label="Enter your password"
              type="password"
              placeholder="Password"
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
              onChange={ ( {target}) => setPassword(target.value)}
              value={password}
            />

            <button
              disabled={isInvalid}
              type="submit"
              className={`bg-blue-500 text-white w-full rounded h-10 font-bold ${isInvalid && 'opacity-50'}`}
            >
              Login
            </button>
            </form>
</div>
<div className="flex justify-center items-center flex-col w-full bg-white p-4 rounded border border-gray-primary">
          <p className="text-sm">
            Don't have an account?{` `}
            <Link to="/signup" className="font-bold text-blue-medium">
              Sign up
            </Link> 
            
            </p>
          

</div>
</div>
</div>
);
}

//bg-blue-medium
//text-red-primary
//text-gray-base
///border-gray