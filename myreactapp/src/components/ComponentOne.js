import axios from "axios";

axios.get('https://api.spacexdata.com/v4/crew')
.then((reponse) => {
    console.log(reponse);
})
.catch((err) =>{
    console.log(err);
});

const ComponentOne = () => {
    return(
        <>
            <p>This is my Component One</p>
        </>
    );
}

export default ComponentOne;