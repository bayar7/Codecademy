const getSleepHours = day => {
    if (day === 'monday'){
      return 8;
    }
    else if(day === 'tuesday'){
      return 7;
    }
    else if(day === 'wednesday'){
      return 9.5;
    }
    else if(day === 'thursday'){
      return 8.5;
    }
    else if(day === 'friday'){
      return 7.5;
    }
    else if(day === 'saturday'){
      return 10;
    }
    else if(day === 'sunday'){
      return 12;
    }
    else{
      return 'Wrong day format';
    }
  }
  // print the sum of all sleep hours in the week
  const getActualSleepHours = () => 
    getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + 
    getSleepHours('friday') + getSleepHours('saturday') +
    getSleepHours('sunday');
    //OR ↓ 
  //const getActualSleepHours = () => 6 + 7 + 9 + 8 + 5 + 10 + 11;
  
  // if idealHours is 8, should print 56
  const getIdealSleepHours = idealHours => idealHours * 7;
  
  // console.log(getActualSleepHours()); // Result: 62
  // console.log(getIdealSleepHours(8)); // Result: 56
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours(8);
   
    if (actualSleepHours === idealSleepHours){
      console.log('You got perfect amount of sleep!');
    }
    else if (actualSleepHours > idealSleepHours){
      console.log('You got ' + (actualSleepHours - idealSleepHours) + ' more sleep than needed...');
    } 
    else if (actualSleepHours < idealSleepHours){
      console.log ('You should get some rest because you have slept ' + (idealSleepHours - actualSleepHours) + ' hours less than you should have this week');
    }
    else {
      console.log ('<----Error in code logic---->');
    }
  };
  
  calculateSleepDebt();