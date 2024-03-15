import Profile from "./profile";

export function Gallery() {
    return (
<div className="flex justify-center lg:justify-start columns-3"> {/* Use a flex container */}
<Profile />
<Profile />
<Profile />
</div>
    );
}
export function Avatar() {
    const avatar = 'https://i.imgur.com/7vQD0fPs.jpg'
    const description = 'Gregorio Y.Zara';
    return (
        <img className="avatar" 
        src={avatar}
        alt={description}/>
    )
}