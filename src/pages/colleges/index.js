import { useState, useEffect } from 'react';
import sanityClient from '../../client';
export default function College(props){

    const [post, setPost] = useState(null);

    useEffect(()=>{
        sanityClient.fetch(`*[_type == "college"], {title,slug}`)
        .then((data)=> setPost(data))
        .catch(console.error)
    },[])
    console.log(post)


    return(
        <div>BLOG</div>
    )

}