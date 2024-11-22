import { useState } from "react";
import { Role } from "../types/RoleTypes";

export const useRole = () => {
  const [activeRole, setActiveRole] = useState<Role | null>(null);

  const handleRoleChange = (role: Role) => {
    setActiveRole(activeRole === role ? null : role);
  };

  return {
    activeRole,
    handleRoleChange,
  };
};
