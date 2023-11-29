import { useQuery } from "@tanstack/react-query";
import { getSectors } from "../../services/apiSectors";

export function useSectors() {
  const { data: { sectors } = {}, isLoading: isLoadingSectors } = useQuery({
    queryKey: ["sectors"],
    queryFn: getSectors,
  });

  return { sectors, isLoadingSectors };
}
