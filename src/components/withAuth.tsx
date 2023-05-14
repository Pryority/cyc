import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { ComponentType } from "react";

interface Props {
  session: any;
}

export const withAuth = (WrappedComponent: ComponentType<Props>) => {
  const Wrapper = ({ session, ...props }: Props) => {
    if (!session) {
      return null; // or redirect to login page
    }

    return <WrappedComponent session={session} {...props} />;
  };

  return Wrapper;
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
};
