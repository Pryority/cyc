// import { GetServerSideProps } from "next";
// import { getSession } from "next-auth/react";
// import { ComponentType } from "react";

// interface Props {
//   session: any;
// }

// const NotAuthenticated = () => {
//   return (
//     <section className="flex flex-col items-center h-[40vh]">
//       <div>
//         You need to be authenticated to access this page. Please log in.
//       </div>
//     </section>
//   );
// };

// export const withAuth = (WrappedComponent: ComponentType<Props>) => {
//   const Wrapper = ({ session, ...props }: Props) => {
//     return session ? (
//       <WrappedComponent session={session} {...props} />
//     ) : (
//       <NotAuthenticated />
//     );
//   };

//   return Wrapper;
// };

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const session = await getSession(context);

//   if (!session) {
//     return {
//       redirect: {
//         destination: "/signin",
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: { session },
//   };
// };
