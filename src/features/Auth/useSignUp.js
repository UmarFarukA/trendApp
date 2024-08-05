import { useMutation } from "@tanstack/react-query";
import { Register } from "../../services/apiAuth";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

export function useSignUp() {
  const navigate = useNavigate();
  const { mutate: register, isLoading } = useMutation({
    mutationFn: Register,
    onSuccess: () => {
      navigate("/login", { replace: true });
      toast.success("User successfully created");
    },

    onError: () => {
      toast.error("Error in creating new user");
    },
  });

  return { register, isLoading };
}
