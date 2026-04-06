import Error from "@/components/Error";
import Wrapper from "@/layouts/Wrapper";
 
export const metadata = {
  title: '404 - Page Not Found | Aquabrim',
  description: "The page you are looking for could not be found. Please return to the Aquabrim home page.",
}


const index = () => {
  return (
    <Wrapper>
      <Error />
    </Wrapper>
  );
};

export default index;