import sanityClient from '../client';
import { useState, useEffect } from 'react';

export default function Post(){

    const [post, setPost] = useState(null);

    useEffect(()=>{
        sanityClient.fetch(
            `*[_type == "post"]{
                title,
                slug,
                mainImage{
                    asset->{
                        _id,
                        url
                    },
                    alt
                    }
                }
            }`
        )
        .then((data)=> setPost(data))
        .catch(console.error)
    },[])


    return(
        <div>BLOG</div>
    )

}