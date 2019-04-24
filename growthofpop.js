function nb_year(p0, percent, aug, p){
    let count = 0;
    if (p0 >= p){
        return count
    }else{
        count += 1
        pop = p0 + p0 * (percent/100) + aug
        return nb_year(pop, percent, aug, p, count)
}
}
console.log("First", nb_year(1500, 5, 100, 5000))
console.log("Second", nb_year(1500000, 2.5, 10000, 2000000))
console.log("Third", nb_year(1500000, 0.25, 1000, 2000000))