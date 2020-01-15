import React from 'react'
import Link from 'next/link';
import { Button } from 'antd';
import { connect } from 'react-redux';
import { incrementCount, decrementCount } from '../actions/count';

const Home = ({
  count,
  increment,
  decrement, 
}) => {
  return (
    <div>
      <Button type="primary" onClick={increment} style={{ marginRight: 10 }}> + </Button>
      <Button type="primary" onClick={decrement}> - </Button>
      <p>count: {count}</p>
      <div>
        test next bug <br />
        <Link href="/about?pid=123444"><a>link about</a></Link>
      </div>

      {/* <div className={styles.aaa}>test moudle css</div> */}
    </div>
  )
};

function mapStateToProps({counter}) {
  return {
    count: counter.count,
  }
}

const mapDispatchToProps = ((dispatch) => ({
  increment: () => dispatch(incrementCount()),
  decrement: () => dispatch(decrementCount()),
}))
export default connect(mapStateToProps, mapDispatchToProps)(Home)
