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
