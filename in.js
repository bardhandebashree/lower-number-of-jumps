
function MJ(arr) 
{
  var map = arr.reduce((a, num, index) => {
    a[num] = a[num] || []
    a[num].push(index)
    return a }, {})
  var now = [0]
  const visit = {
    0: true,
  }
  let steps = 0
  while (now.length > 0) {
    var next = []
    var push = (index) => {
      if (index > 0 && index < arr.length && !visit[index]) {
        visit[index] = true
        next.push(index)
      }
    }
    for (var index of now) {
      if (index === arr.length - 1) {
        return steps
      }
      push(index + 1)
      push(index - 1)
      var indices = map[arr[index]] || []
      for (var in2 of indices) {
        push(in2)
      }
      delete map[arr[index]] 
    }
    steps += 1
    now = next
  }
  return steps;
}
function main()
{
var arr = process.argv.slice(2)
console.log('arr: ', arr)
console.log(MJ(arr))
}
main()