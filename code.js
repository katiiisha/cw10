// 1 шаг - функция получения покенов по запросу 
// 2 шаг - хранение элементов в массив 
// 3 шаг - рендеринг массива покенов

//ищем переменные в разметке
const inp = document.querySelector('.inp');
const btn = document.querySelector('.btn');
const div = document.querySelector('div');

// создаем пустой массив для данных
const arrPoke = [];

//функция 
// 1 шаг именую функцию 
// 2 шаг получет имя покемона 
// 3 шаг возвращает картинку 

const getPoke = async (name) => { 
    let res = await
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    res = await res.json();
    console.log(res);
    return res;
}

// 
const render = () => { 
    div.innerHTML = "";
    arrPoke.forEach((poke) => { 
        const image = document.createElement('img');
        const txt = document.createElement('p');
        image.src = poke.sprites.front_default;
        txt.innerHTML = poke.stats[0].base_stat;
        div.append(image);
        div.append(txt);
    })
}
 
//получает данные с инпута и ждет за счет авэит пока придет результат с сервера
btn.addEventListener('click', async () => { 
    const name = inp.value;
    const res = await getPoke(name);
    arrPoke.push(res);
    console.log(arrPoke);
    render();

})
// getPoke();
