// src/utils/transactionErrorUtils.ts

export async function parseTransactionError(error: any): Promise<string> {
    if (!error) return "Unknown error occurred";
  
    try {
      // Check if the error object contains the `message` property
      if (error.message) {
        // Parse specific revert reasons from the error message
        const revertReasonMatch = error.message.match(/revert (.*)/);
        console.log(error);
        if (revertReasonMatch ) {
          return `Transaction failed: ${revertReasonMatch[0]}`;
        }
  
        return `Error: ${error.message}`;
      }
  
      // If error has a `data` object, try parsing it for the revert reason
      if (error.data) {
        const errorData = error.data;
        if (typeof errorData === "string") {
          return `Error: ${errorData}`;
        } else if (errorData.message) {
          return `Error: ${errorData.message}`;
        }
      }
    } catch (parsingError) {
      console.error("Error parsing transaction error:", parsingError);
    }
  
    // Fallback in case the reason could not be extracted
    return "An unknown error occurred during the transaction";
  }
  