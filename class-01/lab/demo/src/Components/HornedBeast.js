function HornedBeast({ title, imageUrl, description }) {
  return (
    <div className="horned-beast">
      <h2>{title}</h2>
      <img src={imageUrl} alt={title} />
      <p>{description}</p>
    </div>
  );
}
export default HornedBeast;
