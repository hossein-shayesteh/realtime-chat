import { Image } from "@nextui-org/image";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { signIn } from "@/auth";
import LoginButton from "@/src/components/UI/login/LoginButton";

const LoginPage = () => {
  return (
    <div className={"flex justify-center align-middle mt-10 "}>
      <Card className="lg:w-[400px] w-[300px]">
        <CardHeader className="flex justify-center ">
          <Image
            alt="messenger logo"
            height={100}
            src="/messenger.png"
            width={100}
          />
        </CardHeader>
        <CardBody>
          <p className={"text-center"}>Sign in to your account</p>
        </CardBody>
        <CardFooter>
          <form
            className={"w-full"}
            action={async () => {
              "use server";
              await signIn("google");
            }}
          >
            <LoginButton />
          </form>
        </CardFooter>
      </Card>
    </div>
  );
};
export default LoginPage;
