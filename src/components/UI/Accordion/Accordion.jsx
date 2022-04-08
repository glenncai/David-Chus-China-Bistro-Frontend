import React, { useState } from 'react';
import './Accordion.css';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
import { Label } from '../Label/Label';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LABEL_TYPES = {
  Ordered: { type: 'success' },
  Canceled: { type: 'danger' },
  Processing: { type: 'warn' },
  Dispatched: { type: 'info' },
  Abandoned: { type: 'info' },
};

export const Accordion = ({ orders = [] }) => {
  const [selected, setSelected] = useState(null);

  const toggleSelected = (i) => {
    if (i === selected) {
      return setSelected(null);
    }
    setSelected(i);
  };

  const getStatus = () => {
    const order = orders[selected];
    let orderStatus =
      order && order.status && order.status[order.status.length - 1]
        ? order.status[order.status.length - 1].event
        : 'Ordered';

    let type = (orderStatus && LABEL_TYPES[orderStatus].type) || 'success';

    let status = '';
    status = <Label type={type} text={orderStatus} />;

    return status;
  };

  const renderAccordion = () => {
    return (
      <div className="accordion-container">
        {orders.length > 0 &&
          orders.map((order, index) => {
            return (
              <div className="acc-item" key={index}>
                <div
                  className={
                    index === selected ? 'acc-title active' : 'acc-title'
                  }
                  onClick={() => toggleSelected(index)}
                  key={index}
                >
                  <span className="d-none d-md-block">
                    <b>Order ID: </b>
                    {order._id}
                  </span>
                  <span>
                    <b>Order Date: </b>
                    {dayjs(order.createdAt).format('MMMM DD, YYYY, h:mm A')}
                  </span>
                  <FontAwesomeIcon
                    icon={selected === index ? faChevronUp : faChevronDown}
                  />
                </div>
                <div
                  className={
                    selected === index ? 'acc-content show' : 'acc-content'
                  }
                >
                  <div className="d-none d-md-block">{getStatus()}</div>
                  <label>
                    <b>Amount: </b>HKD$
                    {order.total && order.total.toFixed(2)}
                  </label>
                  <div>
                    <Link
                      to={{
                        pathname: `/orders/${order._id}`,
                        orderProps: { order },
                      }}
                    >
                      <button className="btn btn-outline-success">
                        VIEW ORDER
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    );
  };

  return <>{renderAccordion()}</>;
};
