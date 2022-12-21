const Avatar = (props) => {
  return (
    <div
      className="bg-[orange] "
      style={{
        WebkitClipPath: 'polygon( 50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)'
      }}>
      <div className="rounded-full">{props.children}</div>
    </div>
  );
};
export default Avatar;
