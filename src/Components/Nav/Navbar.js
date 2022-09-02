
import React from 'react'
import { useState } from 'react'
import { Modal, ModalHeader, ModalBody } from 'reactstrap'
const Navbar = () => {
  const [modal, setModal] = useState(false)
  const [login, setlogin] = useState(false)

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Sukraj</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item active">
                <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="/">About<span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="/">News <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="/">Features <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="/">Contact <span class="sr-only">(current)</span></a>
              </li>
            </ul>
            <form className="d-flex">
              <button type="button" class="btn btn-success mx-4" onClick={() => setlogin(true)}>Login</button>

              <button type="button" class="btn btn-success mx-4" onClick={() => setModal(true)}>Sign Up</button>

            </form>
          </div>
        </div>
      </nav>
      {/* Sign Up Form */}
      <Modal size='lg' isOpen={modal} toggle={() => setModal(!modal)}>
        <ModalHeader toggle={() => setModal(!modal)} >
          Enter Your Details:
        </ModalHeader>
        <ModalBody>
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Please Enter yOUR Email'/>

            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email Your Name</label>
              <input type="Text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  placeholder='Please Enter Your Name'/>

            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder='Please Enter your Password' />
            </div>
            <div class="mb-3 form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1" />
              <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" class="btn btn-primary">Sign Up</button>
          </form>
        </ModalBody>

      </Modal>

      {/* End of SigUp form */}


      {/* Start Of Login Form */}
      <Modal size='lg' isOpen={login} toggle={() => setlogin(!login)}>
        <ModalHeader toggle={() => setlogin(!login)} >
          Enter Your Details:
        </ModalHeader>
        <ModalBody>

        <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Please Enter your Email'/>

            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder='Please Enter your Password' />
            </div>
            <button type="submit" class="btn btn-primary">Sign Up</button>
          </form>

        </ModalBody>
        </Modal>

      {/* End OF loGIN form */}

    </>
  )
}

export default Navbar