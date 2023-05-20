function useAnimationHook(args = {className : '_A', ignoreclassName : '_B', threshold:.5}) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if(entry.isIntersecting){
            entry.target.classList.add('show');
          } else{
            if(entry.target.classList.contains(args.ignoreclassName))
              return;
            if(entry.target.classList.contains('show'))
            entry.target.classList.remove('show')
          }
        });
      },{threshold:args.threshold});
    
    /**
     * 
     * @param {Array} query String Array of Queries
     */
    const addElementsToObserver = (query = []) => {
      for(let i = 0; i < query.length; i++){
        let elements = document.querySelectorAll(`.${query[i]}`);
        elements.forEach((e) => {observer.observe(e)});
      }
    }
    addElementsToObserver([args.className,args.ignoreclassName]);
    
  
  }
  
  export default useAnimationHook