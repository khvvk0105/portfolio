export const ContactSecond = ({ icon, text, icon1 }) => {
  return (
    <div className="flex gap-8 justify-center mt-4">
      <ul>{icon}</ul>
      <p>{text}</p>
      <ul>{icon1}</ul>
    </div>
  );
};
