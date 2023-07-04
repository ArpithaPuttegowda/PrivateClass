export default function Profile() {
  return (
    <div>
      <Avatar src="https://i.imgur.com/1bX5QH6.jpg" size="100" />
      <Avatar src="https://i.imgur.com/YfeOqp2.jpg" size="50" />
      <Avatar src="https://i.imgur.com/OKS67lh.jpg" size="70" />
    </div>
  );
}

function Avatar({ src, size }) {
  return (
    <img
      style={{ borderRadius: "50%" }}
      src={src}
      alt="is not found"
      width={size}
      height={size}
    />
  );
}
