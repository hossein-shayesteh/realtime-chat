import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import { signIn } from "@/auth";
import Image from "next/image";
import FormButton from "@/src/components/UI/shared/FormButton";
import signInAction from "@/src/lib/action/signInAction";

const LoginPage = () => {
  return (
    <div className={"flex justify-center align-middle mt-10 "}>
      <Card className="lg:w-[400px] w-[300px]">
        <CardHeader className="flex justify-center ">
          <Image
            alt="messenger logo"
            height={100}
            src="/Blink.png"
            width={100}
          />
        </CardHeader>
        <CardBody>
          <p className={"text-center"}>Sign in to your account</p>
        </CardBody>
        <CardFooter>
          <form className={"w-full"} action={signInAction}>
            <FormButton
              color={"primary"}
              variant={"flat"}
              type={"submit"}
              fullWidth
              endContent={
                <Image
                  alt="Google logo"
                  height={25}
                  src="/google-logo.svg"
                  width={25}
                ></Image>
              }
            >
              Google
            </FormButton>
          </form>
        </CardFooter>
      </Card>
    </div>
  );
};
export default LoginPage;
