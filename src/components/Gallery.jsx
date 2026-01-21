function Profile(){
    return (
        <div>
            <h1>Iam inside the component</h1>
        </div>
    )
}

function Gallery(){
    return (
        <div>
            <Profile />
        </div>
    )
}

export default Gallery