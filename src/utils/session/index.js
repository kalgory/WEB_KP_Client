export const withSession =
  (getServerSideProps = () => ({})) =>
  (context) => {
    const result = getServerSideProps(context);
    return {
      ...result,
      props: {},
    };
  };
