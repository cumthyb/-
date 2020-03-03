// 2015-5   2017-9

function getSpanMonth(date1, date2) {
  let startYear = date1.getFullYear()
  let endYear = date2.getFullYear()
  let startMonth = date1.getMonth() + 1
  let endMonth = date2.getMonth() + 1

  for (let i = startYear; i <= endYear; i++) {
    let min = -1
    let max = -1
    if (i === startYear) {
      min = startMonth
      max = 12
    }
    else if (i === endYear) {
      min = 1
      max = endMonth
    }
    else {
      min = 1;
      max = 12
    }
    for (let j = min; j <= max; j++) {
      console.log(`${i}-${j}`);
      console.log();
    }
  }

}

let date1 = new Date('2015-05-26')
let date2 = new Date('2017-06-26')

getSpanMonth(date1, date2)

