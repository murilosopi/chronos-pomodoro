export enum CycleTypes {
  Focus = "focus",
  Rest = "rest",
  Break = "break",
}

export const allCycleTypes = Object.values(CycleTypes);

export const isCycleType = (type: string) => {
  return Object.values(CycleTypes).includes(type as CycleTypes);
};
