export const formatDate = (dateString: string) => {
    const date = new Date(dateString);
  
    const options: any = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZone: "Asia/Kolkata",
    };
  
    const formattedDate = new Intl.DateTimeFormat("en-IN", options).format(date);
    return formattedDate;
  };
  