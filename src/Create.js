import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

   const [ title, setTitle ] = useState('')
   const [ body, setBody ] = useState('')
   const [ author, setAuthor ] = useState('peter')
   const [timer, setTimer] = useState(false)
   const history = useHistory()

   const handleSubmit = (e) => {
      e.preventDefault();
      const blog = { title, body, author };

      setTimer(true);
  
      fetch('http://localhost:8000/blogs/', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog)
      }).then(() => {
        console.log('new blog added');
        setTimer(false)
        history.push('/')
      })
    }

    return ( 
        <div className="create">
           <h2>Add New Blog</h2>
           <form onSubmit = { handleSubmit }>
            <label>Blog title:</label>
            <input
               type="text"
               required
               value = { title }
               onChange={(e) => setTitle(e.target.value)}
            />
           <label>Blog body:</label>
           <textarea
               required
               value = { body }
               onChange= {(e) => setBody(e.target.value)}
           >
           </textarea>
           <label>Blog author:</label>
           <select
           value = { author }
           onChange= {(e) => setAuthor(e.target.value)}
           >
            <option value="mario">mario</option>
            <option value="yoshi">yoshi</option>
            <option value="peter">peter</option>
            <option value="mkwela">mkwela</option>
           </select>
           { !timer && <button>Add Blog</button>}
           { timer && <button>Adding blog... ...</button>}
           <p>{ title }</p>
           <p>{ author }</p>
           </form>
        </div>
     );
}
 
export default Create;