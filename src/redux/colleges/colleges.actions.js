import client from "../../client";

export const ADD_COLLEGE = (college)=>{

    return({
        type: "ADD_COLLEGE",
        payload:{
            college: college,
        },
    });
}

export const CLEAR_COLLEGES = ()=>{

    return({
        type: "CLEAR_COLLEGES",
    });
}

export const GET_COLLEGES = ()=>(dispatch)=>{

    client
    .fetch('*[_type == "college"]{title, slug, "imageUrl": mainImage.asset->url, country, publishedAt, content, "gallery": imagesGallery[].asset->url}')
    .then(res => {
        dispatch(CLEAR_COLLEGES());
        res.map((college)=>dispatch(ADD_COLLEGE(college))) // Here is when i tried to log the data but gets an error message.
    })
    .catch(err => {
      console.log(err);
    });

}