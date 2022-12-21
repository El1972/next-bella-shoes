import styles from '../styles/Home.module.css'
import { useFiltersContext } from '../contexts/FiltersContext';
import { get_designer } from '../side functions/get_designer';
import { get_color } from '../side functions/get_color';


const Sidebar = () => {

    const { sort, handleSort,
        filters: {
            toggle,
            choose,
            colors,
            artists
        },
        updateItems,
        items
    } = useFiltersContext();

    const color = get_color(items, "colors");
    const designer = get_designer(items, "designers");

    return (
        <div>
            <div className={styles['sidebar-parent']}>
                <div className={styles['sidebar-float']}>
                    <div className={styles['sidebar-properties']}>
                        <div className={styles['sidebar-items']}>



                            {/*    !!!  Radio Buttons Functionality Is Working. Just Uncomment It  !!!    */}



                            {/* <div className="dress-section">
                            <div className="inner-dress-section">
                                <form>
                                    <input type="radio"
                                        className='input-oxford'
                                        name='toggle'
                                        value="oxford"
                                        checked={toggle === 'oxford'}
                                        onChange={updateItems}
                                    /> Oxford
                                    <input type="radio"
                                        className='input-derby'
                                        name='toggle'
                                        value="derby"
                                        checked={toggle === 'derby'}
                                        onChange={updateItems}
                                    /> Derby
                                </form>
                            </div>
                        </div>

                        <div className="modern-section">
                            <div className="inner-modern-section">
                                <form>
                                    <input type="radio"
                                        className='input-loafer'
                                        name='choose'
                                        value="loafer"
                                        checked={choose === 'loafer'}
                                        onChange={updateItems}
                                    /> Loafer
                                    <input type="radio"
                                        className='input-monk-strap'
                                        name='choose'
                                        value="monk-strap"
                                        checked={choose === 'monk-strap'}
                                        onChange={updateItems}
                                    /> Monk Strap
                                </form>
                            </div>
                        </div> */}

                            <div className={styles['all-wrapper']}>
                                <div className={styles['inner-all-wrapper']}>
                                    <div className={styles['clearfix']}>
                                        <div className={styles['all-shoes-container']}>
                                            <div className={styles['inner-all-shoes-container']}>
                                                <button className={styles['all-shoes']} name="all_shoes" type="button"
                                                    onClick={updateItems}>All Shoes</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={styles['fabric-wrapper']}>
                                <div className={styles['inner-fabric-wrapper']}>
                                    <div className={styles['clearfix']}>
                                        <div className={styles['leather-buttons-container']}>
                                            <div className={styles['inner-leather-buttons-container']}>
                                                <button className={styles['leather']} name="all_shoes" type="button"
                                                    onClick={updateItems}>Leather</button>
                                            </div>
                                        </div>
                                        <div className={styles['suede-buttons-container']}>
                                            <div className={styles['inner-suede-buttons-container']}>
                                                <button className={styles['suede']} name="all_shoes" type="button"
                                                    onClick={updateItems}>Suede</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={styles['laces-wrapper']}>
                                <div className={styles['inner-laces-wrapper']}>
                                    <div className={styles['clearfix']}>

                                        <div className={styles['leather-buttons-container']}>
                                            <div className={styles['inner-leather-buttons-container']}>
                                                <button className={styles['leather']} name="all_shoes"
                                                    onClick={updateItems}>Laces</button>
                                            </div>
                                        </div>
                                        <div className={styles['suede-buttons-container']}>
                                            <div className={styles['inner-suede-buttons-container']}>
                                                <button className={styles['suede']} name="all_shoes"
                                                    onClick={updateItems}>Laceless</button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className={styles['price-section']}>
                                <span className={styles['price-filter']}> - Filter By Price</span>
                                <form onSubmit={(e) => e.preventDefault()} className={styles['price-form']}>
                                    <label htmlFor="sort"></label>
                                    <select className={styles['select-width']}
                                        name="sort"
                                        value={sort}
                                        onChange={handleSort}>
                                        <option value="select price" className={styles['opl']}>select price</option>
                                        <option value="highest price">From lowest to highest</option>
                                        <option value="lowest price">From highest to lowest</option>
                                    </select>
                                </form>
                            </div>
                            <div className={styles['color-section']}>
                                <span className={styles['color-filter']}> - Filter By Color</span>
                                <form className={styles['colors-form']}>
                                    <label htmlFor="colors"></label>
                                    <select className={styles['select-width']}
                                        name="colors"
                                        value={colors}
                                        onChange={updateItems}>
                                        {color.map((m, index) => {
                                            return <option key={index} value={m}>{m}</option>
                                        })}
                                    </select>
                                </form>
                            </div>
                            <div className={styles['designer-section']}>
                                <span className={styles['designer-filter']}> - Filter By Designer</span>
                                <form className={styles['designer-form']}>
                                    <label htmlFor="designer"></label>
                                    <select className={styles['select-width']}
                                        name="artists"
                                        value={artists}
                                        onChange={updateItems}>
                                        {designer.map((d, index) => {
                                            return <option key={index} value={d}>{d}</option>
                                        })}
                                    </select>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Sidebar