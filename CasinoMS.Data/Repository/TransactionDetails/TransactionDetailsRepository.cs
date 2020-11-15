using CasinoMS.Core.Common;
using CasinoMS.Data.Entity.Information;
using CasinoMS.Data.ViewModel;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CasinoMS.Data.Repository.TransactionDetails
{
    public class TransactionDetailsRepository : ITransactionDetailsRepository
    {
        #region Private Fields

        private readonly CasinoMSDBContext casinoMSDBContext;

        #endregion

        #region Constructor

        public TransactionDetailsRepository(CasinoMSDBContext casinoMSDBContext)
        {
            this.casinoMSDBContext = casinoMSDBContext;
        }

        #endregion

        public IEnumerable<TransactionDetailsViewModel> GetAllTransactionDetails()
        {
            var entities = casinoMSDBContext.inf_transaction_details
                                          .Include(x => x.InfUser)
                                          .OrderByDescending(x => x.SubmittedDate)
                                          .ToList();

            var model = new List<TransactionDetailsViewModel>();

            if (entities != null)
            {
                foreach (var item in entities)
                {
                    var transactionDetailsViewModel = new TransactionDetailsViewModel();

                    transactionDetailsViewModel.Id = item.Id.ToString();
                    transactionDetailsViewModel.TransactionId = item.TransactionId.ToString();
                    transactionDetailsViewModel.TransactionType = item.TransactionType;
                    transactionDetailsViewModel.PlayerUserName = item.PlayerUserName;
                    transactionDetailsViewModel.ReferenceNo = item.ReferenceNo;
                    transactionDetailsViewModel.Amount = item.Amount;
                    transactionDetailsViewModel.SubmittedBy = item.SubmittedBy;
                    transactionDetailsViewModel.SubmittedDate = item.SubmittedDate.ToString();
                    transactionDetailsViewModel.FullName = DataHandler.GetFullName(item.InfUser.FirstName, item.InfUser.LastName);
                    transactionDetailsViewModel.UserId = item.InfUser.UserId.ToString();
                    transactionDetailsViewModel.ProcessId = item.ProcessId.ToString();

                    model.Add(transactionDetailsViewModel);
                }
            }

            return model;
        }

        public IEnumerable<TransactionDetailsViewModel> GetTransactionDetailsByTeam(string teamName)
        {
            var entities = casinoMSDBContext.inf_transaction_details
                                            .Include(x => x.InfUser)
                                            .Where(x => x.InfUser.DefTeams.Description == teamName)
                                            .OrderByDescending(x => x.SubmittedDate)
                                            .ToList();

            var model = new List<TransactionDetailsViewModel>();

            if (entities != null)
            {
                foreach (var item in entities)
                {
                    var transactionDetailsViewModel = new TransactionDetailsViewModel();

                    transactionDetailsViewModel.Id = item.Id.ToString();
                    transactionDetailsViewModel.TransactionId = item.TransactionId.ToString();
                    transactionDetailsViewModel.TransactionType = item.TransactionType;
                    transactionDetailsViewModel.PlayerUserName = item.PlayerUserName;
                    transactionDetailsViewModel.ReferenceNo = item.ReferenceNo;
                    transactionDetailsViewModel.Amount = item.Amount;
                    transactionDetailsViewModel.SubmittedBy = item.SubmittedBy;
                    transactionDetailsViewModel.SubmittedDate = item.SubmittedDate.ToString();
                    transactionDetailsViewModel.FullName = DataHandler.GetFullName(item.InfUser.FirstName, item.InfUser.LastName);
                    transactionDetailsViewModel.UserId = item.InfUser.UserId.ToString();
                    transactionDetailsViewModel.ProcessId = item.ProcessId.ToString();

                    model.Add(transactionDetailsViewModel);
                }
            }

            return model;
        }

        public IEnumerable<TransactionDetailsViewModel> GetTransactionDetailsByUserId(Guid userId)
        {
            var entities = casinoMSDBContext.inf_transaction_details
                                            .Include(x => x.InfUser)
                                            .Where(x => x.InfUser.UserId == userId)
                                            .OrderByDescending(x => x.SubmittedDate)
                                            .ToList();

            var model = new List<TransactionDetailsViewModel>();

            if (entities != null)
            {
                foreach (var item in entities)
                {
                    var transactionDetailsViewModel = new TransactionDetailsViewModel();

                    transactionDetailsViewModel.Id = item.Id.ToString();
                    transactionDetailsViewModel.TransactionId = item.TransactionId.ToString();
                    transactionDetailsViewModel.TransactionType = item.TransactionType;
                    transactionDetailsViewModel.PlayerUserName = item.PlayerUserName;
                    transactionDetailsViewModel.ReferenceNo = item.ReferenceNo;
                    transactionDetailsViewModel.Amount = item.Amount;
                    transactionDetailsViewModel.SubmittedBy = item.SubmittedBy;
                    transactionDetailsViewModel.SubmittedDate = item.SubmittedDate.ToString();
                    transactionDetailsViewModel.FullName = DataHandler.GetFullName(item.InfUser.FirstName, item.InfUser.LastName);
                    transactionDetailsViewModel.UserId = item.InfUser.UserId.ToString();
                    transactionDetailsViewModel.ProcessId = item.ProcessId.ToString();

                    model.Add(transactionDetailsViewModel);
                }
            }

            return model;
        }

        public IEnumerable<TransactionDetailsViewModel> GetTransactionDetailsByDates(string teamName, DateTime startDate, DateTime endDate)
        {
            var entities = casinoMSDBContext.inf_transaction_details
                                            .Include(x => x.InfUser)
                                            .Where(x => x.InfUser.DefTeams.Description == teamName && x.SubmittedDate >= startDate && x.SubmittedDate <= endDate)
                                            .OrderByDescending(x => x.SubmittedDate)
                                            .ToList();

            var model = new List<TransactionDetailsViewModel>();

            if (entities != null)
            {
                foreach (var item in entities)
                {
                    var transactionDetailsViewModel = new TransactionDetailsViewModel();

                    transactionDetailsViewModel.Id = item.Id.ToString();
                    transactionDetailsViewModel.TransactionId = item.TransactionId.ToString();
                    transactionDetailsViewModel.TransactionType = item.TransactionType;
                    transactionDetailsViewModel.PlayerUserName = item.PlayerUserName;
                    transactionDetailsViewModel.ReferenceNo = item.ReferenceNo;
                    transactionDetailsViewModel.Amount = item.Amount;
                    transactionDetailsViewModel.SubmittedBy = item.SubmittedBy;
                    transactionDetailsViewModel.SubmittedDate = item.SubmittedDate.ToString();
                    transactionDetailsViewModel.FullName = DataHandler.GetFullName(item.InfUser.FirstName, item.InfUser.LastName);
                    transactionDetailsViewModel.UserId = item.InfUser.UserId.ToString();
                    transactionDetailsViewModel.ProcessId = item.ProcessId.ToString();

                    model.Add(transactionDetailsViewModel);
                }
            }

            return model;
        }

        public TransactionDetailsViewModel GetTransactionDetailsById(Guid transactionId)
        {
            var entity = casinoMSDBContext.inf_transaction_details
                                          .Include(x => x.InfUser)
                                          .Where(x => x.TransactionId == transactionId)
                                          .FirstOrDefault();

            var transactionDetailsViewModel = new TransactionDetailsViewModel();

            if (entity != null)
            {
                transactionDetailsViewModel.Id = entity.Id.ToString();
                transactionDetailsViewModel.TransactionId = entity.TransactionId.ToString();
                transactionDetailsViewModel.TransactionType = entity.TransactionType;
                transactionDetailsViewModel.PlayerUserName = entity.PlayerUserName;
                transactionDetailsViewModel.ReferenceNo = entity.ReferenceNo;
                transactionDetailsViewModel.Amount = entity.Amount;
                transactionDetailsViewModel.SubmittedBy = entity.SubmittedBy;
                transactionDetailsViewModel.SubmittedDate = entity.SubmittedDate.ToString();
                transactionDetailsViewModel.FullName = DataHandler.GetFullName(entity.InfUser.FirstName, entity.InfUser.LastName);
                transactionDetailsViewModel.UserId = entity.InfUser.UserId.ToString();
                transactionDetailsViewModel.ProcessId = entity.ProcessId.ToString();
            }

            return transactionDetailsViewModel;
        }

        public TransactionDetailsViewModel GetTransactionDetailsByReferenceNo(string referenceNo)
        {
            var entity = casinoMSDBContext.inf_transaction_details
                                          .Include(x => x.InfUser)
                                          .Where(x => x.ReferenceNo == referenceNo)
                                          .FirstOrDefault();

            var transactionDetailsViewModel = new TransactionDetailsViewModel();

            if (entity != null)
            {
                transactionDetailsViewModel.Id = entity.Id.ToString();
                transactionDetailsViewModel.TransactionId = entity.TransactionId.ToString();
                transactionDetailsViewModel.TransactionType = entity.TransactionType;
                transactionDetailsViewModel.PlayerUserName = entity.PlayerUserName;
                transactionDetailsViewModel.ReferenceNo = entity.ReferenceNo;
                transactionDetailsViewModel.Amount = entity.Amount;
                transactionDetailsViewModel.SubmittedBy = entity.SubmittedBy;
                transactionDetailsViewModel.SubmittedDate = entity.SubmittedDate.ToString();
                transactionDetailsViewModel.FullName = DataHandler.GetFullName(entity.InfUser.FirstName, entity.InfUser.LastName);
                transactionDetailsViewModel.UserId = entity.InfUser.UserId.ToString();
                transactionDetailsViewModel.ProcessId = entity.ProcessId.ToString();
            }

            return transactionDetailsViewModel;
        }

        public void AddTransactionDetails(TransactionDetailsViewModel model)
        {
            var transactionDetails = new InfTransactionDetails();
            transactionDetails.TransactionType = model.TransactionType;
            transactionDetails.PlayerUserName = model.PlayerUserName;
            transactionDetails.ReferenceNo = model.ReferenceNo;
            transactionDetails.Amount = model.Amount;
            transactionDetails.SubmittedBy = model.Alias;
            transactionDetails.SubmittedDate = DateTime.UtcNow.AddHours(8);
            transactionDetails.UserId = Guid.Parse(model.UserId);
            transactionDetails.ProcessId = Guid.Parse(model.ProcessId);

            casinoMSDBContext.Add(transactionDetails);
        }

        public void UpdateTransactionDetails(Guid id)
        {
            throw new NotImplementedException();
        }

        public void DeleteTransactionDetails(Guid id)
        {
            throw new NotImplementedException();
        }

        public bool Commit()
        {
            return casinoMSDBContext.SaveChanges() > 0;
        }
    }
}
