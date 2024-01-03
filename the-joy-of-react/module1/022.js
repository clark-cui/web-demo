// BEM CSS
// 缺点：取名心智负担太重，需要让class有语意，还必须全局唯一,而且最终className也会变得很长
function BEM() {
  return (
    <div>
      <div className="card">
        <div className="card__content">
          <div className="card__title">Card Title</div>
          <div className="card__body">Card Body</div>
          <input className="card__input card__input_focused" />
        </div>
      </div>
    </div>
  );
}

// css modules

// with css modules, we write the short name of the class, and the webpack will compile it to a long name

import styles from "./index.module.css";

function CSSModules() {
  return (
    <div>
      <div className={styles.card}>
        <div className={styles.content}>
          <div className={styles.title}>Card Title</div>
          <div className={styles.body}>Card Body</div>
          <input className={`${styles.input} ${styles.inputFocused}`} />
        </div>
      </div>
    </div>
  );
}

// and we can use  classNames library to make it more readable
import classNames from "classnames";
function CSSModulesWithClassNames() {
  return (
    <div>
      <div className={classNames(styles.card)}>
        <div className={styles.content}>
          <div className={styles.title}>Card Title</div>
          <div className={styles.body}>Card Body</div>
          <input className={classNames(styles.input, styles.inputFocused)} />
        </div>
      </div>
    </div>
  );
}
