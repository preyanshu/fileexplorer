type BigDivRefs = React.RefObject<HTMLDivElement>[];

export const handleKeyDown = (
    e: React.KeyboardEvent,
    divIndex: number,
    bigDivRefs: BigDivRefs
  ): void => {
    console.log("e.key", e.key);
    let items: any  = [];
    const currentFocus = document.activeElement as HTMLElement;
  
    
    switch (divIndex) {
      case 0:
        items = bigDivRefs[0].current!.querySelectorAll("button");
        break;
      case 1:
        items = bigDivRefs[1].current!.querySelectorAll("tr");
        break;
      case 2:
      case 3:
        items = [];
        break;
    }
  
    
    if (items.length === 0 && divIndex !== 2 && divIndex !== 3) {
      return;
    }
  
    const currentIndex = Array.from(items).indexOf(currentFocus);
  
    // Special navigation cases
    if (divIndex === 2 && e.key === "ArrowRight") {
      e.preventDefault();
      bigDivRefs[3].current!.focus();
      return;
    }
  
    if (divIndex === 3 && e.key === "ArrowLeft") {
      e.preventDefault();
      bigDivRefs[2].current!.focus();
      return;
    }
  
    // Prevent default behavior for specific keys in certain divs
    if ((divIndex === 3 && e.key !== "Tab" && e.key !== "ArrowUp") || 
        (divIndex === 2 && e.key !== "ArrowUp")) {
      return;
    }
  
    // Handle Tab key
    if (e.key === "Tab") {
      e.preventDefault();
      let nextDivIndex = (divIndex + 1) % bigDivRefs.length;
      if(  nextDivIndex===1 && !(bigDivRefs[1].current)) {

        nextDivIndex = (nextDivIndex + 1) % bigDivRefs.length;

      }
      if (nextDivIndex === 0 && bigDivRefs[0].current && bigDivRefs[0].current.querySelectorAll("button").length > 0) {
        focusFirstItem(bigDivRefs[0].current.querySelectorAll("button"));
      } else if (nextDivIndex === 1 && bigDivRefs[1].current && bigDivRefs[1].current.querySelectorAll("tr").length > 0) {
        focusFirstItem(bigDivRefs[1].current.querySelectorAll("tr"));
      } else {
        bigDivRefs[nextDivIndex].current!.focus();
      }
      return;
    }
  
    // Handle Arrow Left key
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      if (divIndex === 1 || divIndex === 2 || divIndex === 3) {
        if (bigDivRefs[0].current && bigDivRefs[0].current.querySelectorAll("button").length > 0) {
          focusFirstItem(bigDivRefs[0].current.querySelectorAll("button"));
        }
      }
      return;
    }
  
    // Handle Arrow Right key
    if (e.key === "ArrowRight") {
      e.preventDefault();
      if (divIndex === 0 || divIndex === 2 || divIndex === 3) {
        if (bigDivRefs[1].current && bigDivRefs[1].current.querySelectorAll("tr").length > 0) {
          focusFirstItem(bigDivRefs[1].current.querySelectorAll("tr"));
        }
      }
      return;
    }
  
    // Handle Arrow Down key
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (divIndex === 1 && currentIndex === items.length - 1) {
        bigDivRefs[2].current!.focus();
      } else if (currentIndex < items.length - 1) {
        items[currentIndex + 1].focus();
      }
      return;
    }
  
    // Handle Arrow Up key
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if ((divIndex === 2 || divIndex === 3) && bigDivRefs[1].current) {
        focusLastItem(bigDivRefs[1].current!.querySelectorAll("tr"));
      } else if (currentIndex > 0) {
        items[currentIndex - 1].focus();
      }
      return;
    }
  
    // Handle Enter or Space key
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleEnterOrSpace(currentFocus, e.key);
    }
  };
  
  const focusFirstItem = (items: NodeListOf<HTMLElement>): void => {
    if (items.length > 0) {
      items[0].focus();
    }
  };
  
  const focusLastItem = (items: NodeListOf<HTMLElement>): void => {
    if (items.length > 0) {
      items[items.length - 1].focus();
    }
  };
  
  const handleEnterOrSpace = (currentFocus: HTMLElement, key: string): void => {
    if (currentFocus.tagName === "BUTTON") {
      currentFocus.click();
    } else if (currentFocus.tagName === "TR") {
      const detail = currentFocus.querySelectorAll("td");
      const lastTd = detail[detail.length - 1];
      const buttonInLastTd = lastTd?.querySelector("button");
      if (key === " " && buttonInLastTd) {
        buttonInLastTd.click();
      } else {
        const checkbox = currentFocus.querySelector("td button") as HTMLButtonElement | null;
        checkbox?.click();
      }
    }
  };
  