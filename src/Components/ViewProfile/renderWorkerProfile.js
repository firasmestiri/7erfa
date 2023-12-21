const renderWorkerProfile = () => {
  if (!user.workerProfile) {
    return null;
  }

  return (
    <div>
      <h4>Worker Profile</h4>
      <p>
        <strong>Description:</strong> {user.workerProfile.description}
      </p>
      {user.workerProfile.portfolio && (
        <p>
          <strong>Portfolio:</strong>{" "}
          <a
            href={user.workerProfile.portfolio}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Portfolio
          </a>
        </p>
      )}
    </div>
  );
};
