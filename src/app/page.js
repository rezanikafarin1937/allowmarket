import Item from "@/components/item/Item";
import styles from './page.module.scss'

export default function Home() {
  let data = {
    image : '../../image.jpg',
    name : "Reza"
  }
  return (
    <div className="height-full">
      <main className={styles.items}>
        <Item data={data}/>
        <Item data={data}/>
        <Item data={data}/>
        <Item data={data}/>
        <Item data={data}/>
        <Item data={data}/>
        <Item data={data}/>
        <Item data={data}/>
        <Item data={data}/>
        <Item data={data}/>
        <Item data={data}/>
        <Item data={data}/>
        <Item data={data}/>
        <Item data={data}/>
        <Item data={data}/>
      </main>
    </div>
  );
}
