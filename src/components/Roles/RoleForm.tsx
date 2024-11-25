import React, { useState } from "react";
import styles from "./RoleForm.module.css";
import {
  Role,
  TaskCreatorForm,
  AggregatorForm,
  TrainerForm,
} from "../types/RoleTypes";
import { useWallet } from "../hooks/useWallet";
import TrainerNode from "../Trainer/TrainerNode";

interface RoleFormProps {
  role: Role;
}

export const RoleForm: React.FC<RoleFormProps> = ({ role }) => {
  const { isConnected, sendTransactionWeb: sendTransactionWeb } = useWallet();

  const [formData, setFormData] = useState<
    TaskCreatorForm | AggregatorForm | TrainerForm
  >({
    taskName: "",
    rewardAmount: 0,
    llmSource: "",
    datasetInfo: "",
    stakeToken: 0,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const rewardAmount = 0;
    const minAmount =
      role === "taskCreator" ? "10" : role === "aggregator" ? "5" : "3";

    let result: any = {
      success: false,
      transactionHash: "Transaction failed",
    };
    if (role === "taskCreator") {
      const taskName = (formData as TaskCreatorForm).taskName;
      const rewardAmount = (formData as TaskCreatorForm).rewardAmount;
      const llmSource = (formData as TaskCreatorForm).llmSource;
      const datasetInfo = (formData as TaskCreatorForm).datasetInfo;
      const stakeToken = (formData as TaskCreatorForm).stakeToken;

      result = await sendTransactionWeb(
        "stakeTokenCreator",
        taskName,
        rewardAmount,
        llmSource,
        datasetInfo,
        stakeToken
      );
    } else if (role === "aggregator") {
      const stakeAmount = (formData as AggregatorForm).stakeAmount;
      const duration = (formData as AggregatorForm).duration;

      result = await sendTransactionWeb(
        "registerAggregator",
        stakeAmount,
        duration
      );
    } else if (role === "trainer") {
      const nodesDescription = (formData as TrainerForm).nodes;
      const stakeAmount = (formData as TrainerForm).stakeAmount;
      // const selectedTask = (formData as TrainerForm).selectedTask;
      const selectedTask = localStorage.getItem("selectedTask");

      result = await sendTransactionWeb(
        "stakeTrainerNode",
        selectedTask,
        nodesDescription,
        stakeAmount
      );
    }

    if (!result.success) {
      alert(`Transaction failed: ${result.error.message}`);
    } else {
      alert("Transaction successful!" + result.transactionHash);
    }
  };

  const renderTaskCreatorForm = () => (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        name="taskName"
        placeholder="Task Name"
        value={(formData as TaskCreatorForm).taskName}
        onChange={handleInputChange}
        required
        className={styles.input}
      />
      <input
        type="number"
        name="rewardAmount"
        placeholder="Reward Amount (min 1 ETH)"
        value={(formData as TaskCreatorForm).rewardAmount}
        onChange={handleInputChange}
        required
        className={styles.input}
      />
      <input
        type="text"
        name="llmSource"
        placeholder="LLM Source"
        value={(formData as TaskCreatorForm).llmSource}
        onChange={handleInputChange}
        required
        className={styles.input}
      />
      <input
        type="text"
        name="datasetInfo"
        placeholder="Dataset Information"
        value={(formData as TaskCreatorForm).datasetInfo}
        onChange={handleInputChange}
        required
        className={styles.input}
      />
      <input
        type="number"
        name="stakeToken"
        placeholder="Stake Amount (min 10 ETH)"
        value={(formData as TaskCreatorForm).stakeToken}
        onChange={handleInputChange}
        required
        className={styles.input}
      />
      <button type="submit" className={styles.submitButton}>
        Continue as ${role}
      </button>
    </form>
  );

  const renderAggregatorForm = () => (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        name="stakeAmount"
        placeholder="Stake Amount (min 5 ETH)"
        value={(formData as AggregatorForm).stakeAmount}
        onChange={handleInputChange}
        required
        className={styles.input}
      />
      <input
        type="text"
        name="duration"
        placeholder="Duration (min 1 day)"
        value={(formData as AggregatorForm).duration}
        onChange={handleInputChange}
        required
        className={styles.input}
      />
      <button type="submit" className={styles.submitButton}>
        Continue as ${role}
      </button>
    </form>
  );

  const renderTrainerForm = () => (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        name="nodes"
        placeholder="Description"
        value={(formData as TrainerForm).nodes}
        onChange={handleInputChange}
        required
        className={styles.input}
      />
      <input
        type="number"
        name="stakeAmount"
        placeholder="Stake Amount (min 3 ETH)"
        value={(formData as TrainerForm).stakeAmount}
        onChange={handleInputChange}
        required
        className={styles.input}
      />
      <TrainerNode />
      <button type="submit" className={styles.submitButton}>
        Continue as ${role}
      </button>
    </form>
  );

  return (
    <div className={styles.formContainer}>
      {role === "taskCreator" && renderTaskCreatorForm()}
      {role === "aggregator" && renderAggregatorForm()}
      {role === "trainer" && renderTrainerForm()}
    </div>
  );
};
