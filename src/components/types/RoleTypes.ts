export type Role = "taskCreator" | "aggregator" | "trainer";

export interface RoleData {
  title: string;
  width: string;
  content: string;
}

export interface TaskCreatorForm {
  taskName: string;
  rewardAmount: number;
  llmSource: string;
  datasetInfo: string;
  stakeToken: number;
}

export interface AggregatorForm {
  stakeAmount: string;
  duration: string;
}

export interface TrainerForm {
  nodes: string;
  stakeAmount: string;
  duration: string;
}