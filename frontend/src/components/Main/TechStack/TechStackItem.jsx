export default function TechStackItem({
    img,
    name
}) {

    return(
        <div className="item upwards">
            <div>
                <img src={img} alt="" />
            </div>
        <p>{name}</p>
        </div>
    );
}