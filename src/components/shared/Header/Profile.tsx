interface ProfileProps {
  name?: string;
}
const Profile: React.FC<ProfileProps> = ({ name }) => {
  return (
    <>
      <h2>{name}</h2>
    </>
  );
};

export default Profile;
