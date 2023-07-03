export default function Profile() {
  return (
    <div>
      <Avatar
        src="https://i.imgur.com/1bX5QH6.jpg"
        size={{ width: "100", height: "100" }}
      />
      <Avatar
        src="https://i.imgur.com/YfeOqp2.jpg"
        size={{ width: "50", height: "50" }}
      />
      <Avatar
        src="https://i.imgur.com/OKS67lh.jpg"
        size={{ width: "80", height: "50" }}
      />
    </div>
  );
}

function Avatar({ src, size }) {
  return (
    <img
      style={{ borderRadius: "50%" }}
      className="avatar"
      src={src}
      alt="is not found"
      width={size.width}
      height={size.height}
    />
  );
}
