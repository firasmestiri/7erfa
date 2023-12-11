<div className="image-container">
{/* Customer image we put 1 to say its a customer */}
<div
  className="select-image on-click-signup"
  onClick={() => pickone(1)}
>
  <Image
    src={imageUrls[3].url}
    alt=""
    roundedCircle
    className="image-style"
  />
</div>
{/* worker image we put 2 to say its worker */}
<div
  className="select-image on-click-signup"
  onClick={() => pickone(2)}
>
  <Image
    src={imageUrls[4].url}
    alt=""
    fluid
    rounded
    roundedCircle
    className="image-style"
  />
</div>
</div>