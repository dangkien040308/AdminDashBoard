
export default function Image({params : { imageURL }} : { params : { imageURL : string }}) {
  return (
    <div>
      <img src={imageURL} alt="image" className="w-full h-full object-cover" />
    </div>
  )
}