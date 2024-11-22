import React, { useState } from "react";
import styles from "./RoleForm.module.css";
import {
  Role,
  TaskCreatorForm,
  AggregatorForm,
  TrainerForm,
} from "../types/RoleTypes";
import { useWallet } from "../hooks/useWallet";

interface RoleFormProps {
  role: Role;
}

export const RoleForm: React.FC<RoleFormProps> = ({ role }) => {
  const { sendTransaction } = useWallet();
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
    const minAmount =
      role === "taskCreator" ? "10" : role === "aggregator" ? "5" : "3";
    const result = await sendTransaction(minAmount);

    if (!result.success) {
      alert(`Transaction failed: ${result.error}`);
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
        type="text"
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
        type="text"
        name="stakeAmount"
        placeholder="Stake Amount (min 10 ETH)"
        value={(formData as TaskCreatorForm).stakeToken}
        onChange={handleInputChange}
        required
        className={styles.input}
      />
      <button type="submit" className={styles.submitButton}>
        Continue
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
        Continue
      </button>
    </form>
  );

  const renderTrainerForm = () => (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        name="nodes"
        placeholder="Number of Nodes (min 3)"
        value={(formData as TrainerForm).nodes}
        onChange={handleInputChange}
        required
        className={styles.input}
      />
      <input
        type="text"
        name="stakeAmount"
        placeholder="Stake Amount (min 3 ETH)"
        value={(formData as TrainerForm).stakeAmount}
        onChange={handleInputChange}
        required
        className={styles.input}
      />
      <button type="submit" className={styles.submitButton}>
        `Continue as ${role}
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
